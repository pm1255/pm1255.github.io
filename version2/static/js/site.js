const contentDir = 'contents/'
const contentVersion = 'cv20261023k'
const sectionNames = ['home', 'papers', 'internship', 'awards']
const localizedSections = new Set(['home', 'internship', 'awards'])
const supportedLanguages = new Set(['en', 'zh'])

const copy = {
    en: {
        title: 'Miao Pan · 潘淼',
        'skip-to-content': 'Skip to content',
        'avatar-alt': 'Doraemon avatar for Miao Pan',
        'avatar-caption': 'Software Engineering Ph.D. student',
        'profile-role': 'Ph.D. student · Zhejiang University',
        'nav-about': 'About',
        'nav-news': 'News',
        'nav-publications': 'Papers',
        'nav-experience': 'Experience',
        'nav-awards': 'Honors',
        'language-switcher': 'Language',
        'language-en': 'EN',
        'language-zh': '中',
        'day-mode': 'Day',
        'kicker-profile': 'Profile',
        'news-kicker': 'Conference decisions',
        'news-title': 'News',
        'date-1': 'Oct 15, 2026',
        'date-2': 'Sep 24, 2026',
        'date-3': 'May 18, 2026',
        'date-4': 'May 18, 2026',
        'date-5': 'Apr 30, 2026',
        'date-6': 'Apr 4, 2026',
        'date-7': 'Dec 8, 2025',
        'date-8': 'Dec 8, 2025',
        'date-9': 'Nov 8, 2025',
        'date-10': 'Nov 8, 2025',
        'date-11': 'Nov 8, 2025',
        'date-12': 'Oct 29, 2025',
        'date-13': 'Jun 30, 2025',
        'update-1': 'VLA-Δ is now online with its project page, code, and model resources.',
        'update-2': 'VLA-Corrector was accepted to NeurIPS 2026.',
        'update-3': 'Wiener Sampling was presented orally at INFOCOM 2026 in Tokyo, Japan.',
        'update-4': 'OU Sampling was presented orally at INFOCOM 2026 in Tokyo, Japan.',
        'update-5': 'Manifold Departure was accepted to ICML 2026.',
        'update-6': 'GFT was accepted to ACL Findings 2026.',
        'update-7': 'Wiener Sampling was accepted to INFOCOM 2026.',
        'update-8': 'OU Sampling was accepted to INFOCOM 2026.',
        'update-9': 'Ground What You See was accepted to AAAI 2026.',
        'update-10': 'RAGFort was accepted to AAAI 2026.',
        'update-11': 'Do Not Merge My Model was accepted to AAAI 2026.',
        'update-12': 'VERIRL was presented orally in Room Barcelona at ICCAD 2025 in Munich, Germany.',
        'update-13': 'VERIRL was accepted to ICCAD 2025.',
        'kicker-publications': 'Research',
        'publications-title': 'Papers',
        'code-link': 'Code',
        'project-link': 'Project page',
        'model-link': 'Model',
        'dataset-link': 'Dataset',
        'artifacts-link': 'Models & data',
        'kicker-experience': 'Experience',
        'experience-title': 'Education & Experience',
        'kicker-awards': 'Honors',
        'awards-title': 'Honors & Services',
    },
    zh: {
        title: '潘淼 · Miao Pan',
        'skip-to-content': '跳转到正文',
        'avatar-alt': '潘淼的哆啦A梦头像',
        'avatar-caption': '软件工程博士生',
        'profile-role': '浙江大学 · 软件工程博士生',
        'nav-about': '关于我',
        'nav-news': '动态',
        'nav-publications': '论文',
        'nav-experience': '经历',
        'nav-awards': '荣誉',
        'language-switcher': '语言',
        'language-en': 'EN',
        'language-zh': '中',
        'day-mode': '白天',
        'kicker-profile': '个人简介',
        'news-kicker': '会议录用',
        'news-title': '动态',
        'date-1': '2026 年 10 月 15 日',
        'date-2': '2026 年 9 月 24 日',
        'date-3': '2026 年 5 月 18 日',
        'date-4': '2026 年 5 月 18 日',
        'date-5': '2026 年 4 月 30 日',
        'date-6': '2026 年 4 月 4 日',
        'date-7': '2025 年 12 月 8 日',
        'date-8': '2025 年 12 月 8 日',
        'date-9': '2025 年 11 月 8 日',
        'date-10': '2025 年 11 月 8 日',
        'date-11': '2025 年 11 月 8 日',
        'date-12': '2025 年 10 月 29 日',
        'date-13': '2025 年 6 月 30 日',
        'update-1': 'VLA-Δ 已上线，项目主页、代码和模型资源同步公开。',
        'update-2': 'VLA-Corrector 已被 NeurIPS 2026 录用。',
        'update-3': 'Wiener Sampling 于 2026 年在日本东京举行的 INFOCOM 2026 上作了口头报告。',
        'update-4': 'OU Sampling 于 2026 年在日本东京举行的 INFOCOM 2026 上作了口头报告。',
        'update-5': 'Manifold Departure 已被 ICML 2026 录用。',
        'update-6': 'GFT 已被 ACL Findings 2026 录用。',
        'update-7': 'Wiener Sampling 已被 INFOCOM 2026 录用。',
        'update-8': 'OU Sampling 已被 INFOCOM 2026 录用。',
        'update-9': 'Ground What You See 已被 AAAI 2026 录用。',
        'update-10': 'RAGFort 已被 AAAI 2026 录用。',
        'update-11': 'Do Not Merge My Model 已被 AAAI 2026 录用。',
        'update-12': 'VERIRL 在德国慕尼黑举行的 ICCAD 2025 上于 Barcelona 会议室作了口头报告。',
        'update-13': 'VERIRL 已被 ICCAD 2025 录用。',
        'kicker-publications': '研究',
        'publications-title': '论文',
        'code-link': '代码',
        'project-link': '项目主页',
        'model-link': '模型',
        'dataset-link': '数据集',
        'artifacts-link': '模型与数据',
        'kicker-experience': '经历',
        'experience-title': '教育与经历',
        'kicker-awards': '荣誉',
        'awards-title': '荣誉与服务',
    },
}


const paperVisuals = [
    ['vla-δ', 'https://arxiv.org/html/2610.21306v1/2-method.png'],
    ['vla-corrector', 'https://zju-omniai.github.io/vla-corrector/assets/images/method_overview.png'],
    ['scene-designer', 'https://arxiv.org/html/2610.23121v1/fig4.png'],
    ['spatial-interactor', 'https://arxiv.org/html/2609.23038v2/fig7_manual_preview/updated_figures/fig1_overview.png'],
    ['show,', 'https://arxiv.org/html/2607.21072v1/img/protocolized_visual_evaluation_v4.png'],
    ['mitigating manifold', 'https://arxiv.org/html/2606.09859v1/Structure_v3.png'],
    ['verirl', 'https://paper-assets.alphaxiv.org/figures/2508.18462v1/x2.png'],
    ['ground what you see', 'https://raw.githubusercontent.com/ZJU-OmniAI/OMNEX-VL/main/method.png'],
    ['gft:', 'https://images.emergentmind.com/paper-images/2604-14258/method2.png'],
    ['ragfort', 'https://api-rsrc.hyper.ai/paper2blog/40432/e80d66ba-d87c-4141-82db-0d7e033da6b6/mineru/canonical_resources/figure_2.png'],
    ['do not merge', 'https://arxiv.org/html/2511.10712v2/method_fig.jpg'],
    ['embodied-navigator', 'https://zju-omniai.github.io/Embodied-Navigator/img/architecture.png'],
    ['embodiedmemory', 'https://zju-omniai.github.io/Embodied-Omni/EmbodiedMemoryBench/assets/architecture.png'],
    ['sare:', 'https://arxiv.org/html/2603.17729v3/overview4.png'],
    ['rubrics4vla', 'static/assets/img/papers/rubrics4vla-method.png'],
    ['stabilizing rl', 'static/assets/img/papers/moe-vla-rl-method.png'],
    ['fractional reinforcement', 'static/assets/img/papers/fractional-rl-method.png'],
]

let renderSequence = 0

function getInitialLanguage() {
    const queryLanguage = new URL(window.location.href).searchParams.get('lang')
    if (supportedLanguages.has(queryLanguage)) return queryLanguage

    try {
        const savedLanguage = window.localStorage.getItem('homepage-language')
        if (supportedLanguages.has(savedLanguage)) return savedLanguage
    } catch (error) {
        console.info('Language preference is unavailable:', error)
    }

    return 'en'
}

function getContentFile(sectionName, language) {
    const suffix = language === 'zh' && localizedSections.has(sectionName) ? '.zh' : ''
    return `${sectionName}${suffix}.md`
}

async function fetchText(filename) {
    const response = await fetch(`${contentDir}${filename}?v=${contentVersion}`)
    if (!response.ok) throw new Error(`Unable to load ${filename}: ${response.status}`)
    return response.text()
}

function applyInterfaceLanguage(language) {
    const languageCopy = copy[language]
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.title = languageCopy.title

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        if (languageCopy[key]) element.innerHTML = languageCopy[key]
    })

    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria-label')
        if (languageCopy[key]) element.setAttribute('aria-label', languageCopy[key])
    })

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt')
        if (languageCopy[key]) element.setAttribute('alt', languageCopy[key])
    })

    document.querySelectorAll('.language-option').forEach(button => {
        const isActive = button.dataset.language === language
        button.classList.toggle('is-active', isActive)
        button.setAttribute('aria-pressed', String(isActive))
    })
}

function createActionIcon(type) {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    icon.classList.add('action-icon')
    icon.setAttribute('aria-hidden', 'true')
    icon.setAttribute('focusable', 'false')

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    const iconReference = `#icon-${type}`
    use.setAttribute('href', iconReference)
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconReference)
    icon.appendChild(use)
    return icon
}

function decorateActionLinks(root) {
    root.querySelectorAll('a').forEach(link => {
        if (link.querySelector('.action-icon')) return

        const label = link.textContent
            .replace(/↗/g, '')
            .replace(/^[^a-z]+/i, '')
            .trim()
            .toLowerCase()

        let type = null
        if (label.startsWith('paper') || label.startsWith('daily paper')) type = 'paper'
        else if (label.startsWith('presentation')) type = 'presentation'
        else if (label.startsWith('project')) type = 'project'
        else if (label.startsWith('code')) type = 'code'
        else if (label.startsWith('model')) type = 'model'
        else if (label.startsWith('dataset')) type = 'dataset'
        else if (label.startsWith('models')) type = 'model'

        if (!type) return
        link.classList.add('action-link', `action-${type}`)
        const visibleLabel = type === 'paper' && label.startsWith('daily paper')
            ? 'Daily Paper'
            : type === 'model' && label.startsWith('models')
                ? 'Models & data'
                : type.charAt(0).toUpperCase() + type.slice(1)
        link.textContent = visibleLabel
        link.target = '_blank'
        link.rel = 'noreferrer'
        link.prepend(createActionIcon(type))
    })
}

function decoratePaperTitles(root) {
    root.querySelectorAll('li').forEach(item => {
        const title = item.querySelector(':scope > strong:first-child, :scope > p > strong:first-child')
        const paperLink = [...item.querySelectorAll('a')].find(link => {
            const label = link.textContent.replace(/^[^a-z]+/i, '').trim().toLowerCase()
            return label.startsWith('paper')
        })
        if (!title || !paperLink || title.closest('a')) return

        const titleLink = document.createElement('a')
        titleLink.className = 'paper-title-link'
        titleLink.href = paperLink.href
        titleLink.target = '_blank'
        titleLink.rel = 'noreferrer'
        title.replaceWith(titleLink)
        titleLink.appendChild(title)
    })
}

function decoratePaperVisuals(root) {
    root.querySelectorAll('li').forEach(item => {
        if (item.querySelector('.paper-thumb')) return

        const titleNode = item.querySelector('strong')
        const title = titleNode?.textContent.trim().toLowerCase() || ''
        const visual = paperVisuals.find(([match]) => title.includes(match))

        const thumb = document.createElement('span')
        thumb.className = 'paper-thumb'

        const fallback = document.createElement('span')
        fallback.className = 'paper-thumb-fallback'
        fallback.textContent = 'METHOD'

        if (visual) {
            const image = document.createElement('img')
            image.src = visual[1]
            image.alt = `Method overview for ${titleNode?.textContent.trim() || 'paper'}`
            image.loading = 'lazy'
            image.referrerPolicy = 'no-referrer'
            image.addEventListener('error', () => {
                image.hidden = true
                thumb.classList.add('is-fallback')
            })
            thumb.appendChild(image)
        }

        thumb.appendChild(fallback)

        item.prepend(thumb)
    })
}

async function renderLanguage(language) {
    const currentRender = ++renderSequence
    applyInterfaceLanguage(language)

    const files = sectionNames.map(sectionName => getContentFile(sectionName, language))
    const contents = await Promise.all(files.map(fetchText))
    if (currentRender !== renderSequence) return

    sectionNames.forEach((sectionName, index) => {
        const target = document.getElementById(`${sectionName}-md`)
        if (!target) return

        target.innerHTML = marked.parse(contents[index])
        decorateActionLinks(target)
        if (target.id === 'papers-md') {
            decoratePaperTitles(target)
            decoratePaperVisuals(target)
        }
    })
}

function saveLanguage(language) {
    try {
        window.localStorage.setItem('homepage-language', language)
    } catch (error) {
        console.info('Language preference could not be saved:', error)
    }
}

function updateLanguageUrl(language) {
    const url = new URL(window.location.href)
    if (language === 'zh') url.searchParams.set('lang', 'zh')
    else url.searchParams.delete('lang')
    window.history.replaceState({}, '', url.pathname + url.search + url.hash)
}

function setupNavigation() {
    const navLinks = [...document.querySelectorAll('.nav-link')]
    const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean)

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return
                navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`))
            })
        }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 })
        sections.forEach(section => observer.observe(section))
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.marked) marked.use({ mangle: false, headerIds: false })
    setupNavigation()

    document.querySelectorAll('.language-option').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language
            saveLanguage(language)
            updateLanguageUrl(language)
            renderLanguage(language).catch(error => console.error(error))
        })
    })

    renderLanguage(getInitialLanguage()).catch(error => {
        console.error(error)
        document.querySelectorAll('[aria-live="polite"]').forEach(target => {
            target.textContent = 'Content could not be loaded. Please refresh the page.'
        })
    })
})

