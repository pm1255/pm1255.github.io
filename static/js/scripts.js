const content_dir = 'contents/'
const section_names = ['home', 'publications', 'preprints', 'awards']
const localized_sections = new Set(['home', 'awards'])
const supported_languages = new Set(['en', 'zh'])

const language_copy = {
    en: {
        'toggle-navigation': 'Toggle navigation',
        'language-switcher': 'Language',
        'hero-label': 'Anime twilight sky and tree',
        'avatar-alt': 'Portrait of Miao Pan',
        'nav-home': 'HOME',
        'nav-publications': 'PUBLICATIONS',
        'nav-preprints': 'PREPRINTS',
        'nav-awards': 'AWARDS',
        'section-publications': 'PUBLICATIONS',
        'section-preprints': 'PREPRINTS',
        'section-awards': 'AWARDS',
        'license': 'License',
        description: 'Academic webpage of Miao Pan',
        directions: {
            'Computer Networks': 'Computer Networks',
            'Trustworthy AI & Security': 'Trustworthy AI & Security',
            'Multimodal Agents & RL': 'Multimodal Agents & RL',
            'Embodied Intelligence': 'Embodied Intelligence',
        },
    },
    zh: {
        'toggle-navigation': '切换导航',
        'language-switcher': '语言',
        'hero-label': '动漫风格的暮色天空与树木',
        'avatar-alt': '潘淼的个人照片',
        'nav-home': '首页',
        'nav-publications': '论文',
        'nav-preprints': '预印本',
        'nav-awards': '奖项',
        'section-publications': '论文',
        'section-preprints': '预印本',
        'section-awards': '奖项',
        'license': '许可证',
        description: '潘淼的学术主页',
        directions: {
            'Computer Networks': '计算机网络',
            'Trustworthy AI & Security': '可信人工智能与安全',
            'Multimodal Agents & RL': '多模态智能体与强化学习',
            'Embodied Intelligence': '具身智能',
        },
    },
}

let render_sequence = 0

function get_initial_language() {
    const query_language = new URL(window.location.href).searchParams.get('lang')
    if (supported_languages.has(query_language)) {
        return query_language
    }

    try {
        const saved_language = window.localStorage.getItem('homepage-language')
        if (supported_languages.has(saved_language)) {
            return saved_language
        }
    } catch (error) {
        console.log('Language preference is unavailable:', error)
    }

    return 'en'
}

function get_content_file(section_name, language) {
    const suffix = language === 'zh' && localized_sections.has(section_name) ? '.zh' : ''
    return `${section_name}${suffix}.md`
}

async function fetch_text(filename) {
    const response = await fetch(content_dir + filename)
    if (!response.ok) {
        throw new Error(`Unable to load ${filename}: ${response.status}`)
    }
    return response.text()
}

function apply_interface_language(language) {
    const copy = language_copy[language]
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.querySelector('meta[name="description"]').content = copy.description

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        element.textContent = copy[key]
    })

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label')
        element.setAttribute('aria-label', copy[key])
    })

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt')
        element.setAttribute('alt', copy[key])
    })

    document.querySelectorAll('.language-option').forEach(button => {
        const is_active = button.dataset.language === language
        button.classList.toggle('is-active', is_active)
        button.setAttribute('aria-pressed', is_active.toString())
    })
}

function apply_config(config) {
    Object.keys(config).forEach(key => {
        const element = document.getElementById(key)
        if (element) {
            element.innerHTML = config[key]
        }
    })
}

function translate_direction_headings(language) {
    const directions = language_copy[language].directions
    document.querySelectorAll('#publications-md h4, #preprints-md h4').forEach(heading => {
        const translated_heading = directions[heading.textContent.trim()]
        if (translated_heading) {
            heading.textContent = translated_heading
        }
    })
}

async function render_language(language) {
    const current_render = ++render_sequence
    apply_interface_language(language)

    const config_file = language === 'zh' ? 'config.zh.yml' : 'config.yml'
    const files = [config_file].concat(
        section_names.map(section_name => get_content_file(section_name, language))
    )
    const file_contents = await Promise.all(files.map(fetch_text))

    if (current_render !== render_sequence) {
        return
    }

    apply_config(jsyaml.load(file_contents[0]))
    section_names.forEach((section_name, index) => {
        document.getElementById(section_name + '-md').innerHTML = marked.parse(file_contents[index + 1])
    })
    translate_direction_headings(language)

    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        await window.MathJax.typesetPromise()
    }
}

function save_language(language) {
    try {
        window.localStorage.setItem('homepage-language', language)
    } catch (error) {
        console.log('Language preference could not be saved:', error)
    }
}

function update_language_url(language) {
    const url = new URL(window.location.href)
    if (language === 'zh') {
        url.searchParams.set('lang', 'zh')
    } else {
        url.searchParams.delete('lang')
    }
    window.history.replaceState({}, '', url.pathname + url.search + url.hash)
}

window.addEventListener('DOMContentLoaded', () => {
    const main_nav = document.body.querySelector('#mainNav')
    if (main_nav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        })
    }

    const navbar_toggler = document.body.querySelector('.navbar-toggler')
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(nav_item => {
        nav_item.addEventListener('click', () => {
            if (window.getComputedStyle(navbar_toggler).display !== 'none') {
                navbar_toggler.click()
            }
        })
    })

    marked.use({ mangle: false, headerIds: false })

    document.querySelectorAll('.language-option').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language
            save_language(language)
            update_language_url(language)
            render_language(language).catch(error => console.error(error))

            if (window.getComputedStyle(navbar_toggler).display !== 'none'
                && navbar_toggler.getAttribute('aria-expanded') === 'true') {
                navbar_toggler.click()
            }
        })
    })

    render_language(get_initial_language()).catch(error => console.error(error))
})
