const contentDir = 'contents/'
const sectionNames = ['home', 'publications', 'preprints', 'internship', 'awards']
const localizedSections = new Set(['home', 'internship', 'awards'])
const supportedLanguages = new Set(['en', 'zh'])

const copy = {
    en: {
        title: 'Miao Pan · 潘淼',
        'skip-to-content': 'Skip to content',
        'avatar-alt': 'Doraemon avatar for Miao Pan',
        'profile-role': 'Ph.D. student · Zhejiang University',
        'nav-about': 'About',
        'nav-news': 'News',
        'nav-publications': 'Papers',
        'nav-opensource': 'Projects',
        'nav-experience': 'Experience',
        'nav-awards': 'Honors',
        'language-switcher': 'Language',
        'language-en': 'EN',
        'language-zh': '中',
        'day-mode': 'Day',
        'kicker-profile': 'Profile',
        'news-kicker': 'Conference decisions',
        'news-title': 'News',
        'date-1': 'Sep 24, 2026',
        'date-2': 'Apr 30, 2026',
        'date-3': 'Apr 4, 2026',
        'date-4': 'Dec 8, 2025',
        'date-5': 'Nov 8, 2025',
        'date-6': 'Jun 30, 2025',
        'update-1': 'NeurIPS 2026 · author notification',
        'update-2': 'ICML 2026 · author notification',
        'update-3': 'ACL Findings 2026 · acceptance notification',
        'update-4': 'INFOCOM 2026 · acceptance notification',
        'update-5': 'AAAI-26 · final acceptance notification',
        'update-6': 'ICCAD 2025 · regular-paper notification',
        'kicker-publications': 'Research',
        'publications-title': 'Papers',
        'research-filter-label': 'Research directions',
        'research-filter-all': 'All',
        'published-label': 'Publications',
        'preprints-label': 'Preprints',
        'kicker-opensource': 'Projects',
        'opensource-title': 'Projects',
        'public-code': 'Open source',
        'scene-description': 'Agentic 3D scene generation.',
        'spatial-description': 'Spatial reasoning through interaction.',
        'show-description': 'A benchmark for spatial cognition in generative pixels.',
        'code-link': 'Code',
        'project-link': 'Project page',
        'model-link': 'Model',
        'dataset-link': 'Dataset',
        'artifacts-link': 'Models & data',
        'kicker-experience': 'Experience',
        'experience-title': 'Experience',
        'kicker-awards': 'Honors',
        'awards-title': 'Honors',
        paperCount: count => `${count} ${count === 1 ? 'paper' : 'papers'}`,
        directions: {
            'Computer Networks': 'Computer Networks',
            'Trustworthy AI & Security': 'Trustworthy AI & Security',
            'Multimodal Agents & RL': 'Multimodal Agents & RL',
            'Embodied Intelligence': 'Embodied Intelligence',
        },
    },
    zh: {
        title: '潘淼 · Miao Pan',
        'skip-to-content': '跳转到正文',
        'avatar-alt': '潘淼的哆啦A梦头像',
        'profile-role': '浙江大学 · 软件工程博士生',
        'nav-about': '关于我',
        'nav-news': '动态',
        'nav-publications': '论文',
        'nav-opensource': '项目',
        'nav-experience': '经历',
        'nav-awards': '荣誉',
        'language-switcher': '语言',
        'language-en': 'EN',
        'language-zh': '中',
        'day-mode': '白天',
        'kicker-profile': '个人简介',
        'news-kicker': '会议录用',
        'news-title': '动态',
        'date-1': '2026 年 9 月 24 日',
        'date-2': '2026 年 4 月 30 日',
        'date-3': '2026 年 4 月 4 日',
        'date-4': '2025 年 12 月 8 日',
        'date-5': '2025 年 11 月 8 日',
        'date-6': '2025 年 6 月 30 日',
        'update-1': 'NeurIPS 2026 · 作者录用通知',
        'update-2': 'ICML 2026 · 作者录用通知',
        'update-3': 'ACL Findings 2026 · 录用通知',
        'update-4': 'INFOCOM 2026 · 录用通知',
        'update-5': 'AAAI-26 · 最终录用通知',
        'update-6': 'ICCAD 2025 · regular paper 录用通知',
        'kicker-publications': '研究',
        'publications-title': '论文',
        'research-filter-label': '研究方向',
        'research-filter-all': '全部',
        'published-label': '已发表论文',
        'preprints-label': '预印本',
        'kicker-opensource': '项目',
        'opensource-title': '项目',
        'public-code': '开源',
        'scene-description': '面向智能体的三维场景生成。',
        'spatial-description': '通过交互进行空间推理。',
        'show-description': '生成像素空间认知评测基准。',
        'code-link': '代码',
        'project-link': '项目主页',
        'model-link': '模型',
        'dataset-link': '数据集',
        'artifacts-link': '模型与数据',
        'kicker-experience': '经历',
        'experience-title': '经历',
        'kicker-awards': '荣誉',
        'awards-title': '荣誉',
        paperCount: count => `${count} 篇论文`,
        directions: {
            'Computer Networks': '计算机网络',
            'Trustworthy AI & Security': '可信人工智能与安全',
            'Multimodal Agents & RL': '多模态智能体与强化学习',
            'Embodied Intelligence': '具身智能',
        },
    },
}

const directionIcons = {
    'Computer Networks': '◌',
    'Trustworthy AI & Security': '◇',
    'Multimodal Agents & RL': '✦',
    'Embodied Intelligence': '◈',
}

const paperVisuals = [
    ['vla-corrector', 'https://zju-omniai.github.io/vla-corrector/assets/images/method_overview.png'],
    ['scene-designer', 'https://zju-omniai.github.io/Scene-Designer/assets/images/paper-figure-5.svg'],
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
    const response = await fetch(contentDir + filename)
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
        if (label.startsWith('paper')) type = 'paper'
        else if (label.startsWith('project')) type = 'project'
        else if (label.startsWith('code')) type = 'code'
        else if (label.startsWith('model')) type = 'model'
        else if (label.startsWith('dataset')) type = 'dataset'
        else if (label.startsWith('models')) type = 'model'

        if (!type) return
        link.classList.add('action-link', `action-${type}`)
        const visibleLabel = type === 'model' && label.startsWith('models')
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

function setupPaperFilters(language) {
    const languageCopy = copy[language]
    const filterHost = document.getElementById('research-filters')
    const roots = ['publications-md', 'preprints-md']
        .map(id => document.getElementById(id))
        .filter(Boolean)

    if (!filterHost || !roots.length) return

    const groups = []
    roots.forEach(root => {
        root.querySelectorAll('h4').forEach((heading, index) => {
            const direction = heading.textContent.trim()
            const paperList = heading.nextElementSibling
            const translatedHeading = languageCopy.directions[direction]

            if (!translatedHeading || !paperList || paperList.tagName !== 'UL') return

            const icon = document.createElement('span')
            icon.className = 'paper-category-icon'
            icon.setAttribute('aria-hidden', 'true')
            icon.textContent = directionIcons[direction] || '•'

            const label = document.createElement('span')
            label.className = 'paper-category-label'
            label.textContent = translatedHeading

            const count = document.createElement('span')
            count.className = 'paper-category-count'
            count.setAttribute('aria-hidden', 'true')
            count.textContent = languageCopy.paperCount(paperList.children.length)

            heading.className = 'paper-category-heading'
            heading.dataset.direction = direction
            heading.replaceChildren(icon, label, count)
            paperList.dataset.direction = direction
            paperList.id = `${root.id}-category-${index}`
            groups.push({ direction, heading, paperList })
        })
    })

    filterHost.replaceChildren()
    filterHost.setAttribute('aria-label', languageCopy['research-filter-label'])

    const buttons = []
    const addFilter = (direction, text) => {
        const button = document.createElement('button')
        button.className = 'research-filter'
        button.type = 'button'
        button.dataset.direction = direction
        button.setAttribute('aria-pressed', 'false')
        button.textContent = text
        filterHost.appendChild(button)
        buttons.push(button)
    }

    addFilter('all', languageCopy['research-filter-all'])
    ;[...new Set(groups.map(group => group.direction))].forEach(direction => {
        addFilter(direction, languageCopy.directions[direction])
    })

    const applyFilter = selectedDirection => {
        buttons.forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.direction === selectedDirection))
        })
        groups.forEach(({ direction, heading, paperList }) => {
            const visible = selectedDirection === 'all' || direction === selectedDirection
            heading.hidden = !visible
            paperList.hidden = !visible
        })
    }

    buttons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.direction)))
    applyFilter('all')
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
        if (target.id === 'publications-md' || target.id === 'preprints-md') {
            decoratePaperTitles(target)
            decoratePaperVisuals(target)
        }
    })
    setupPaperFilters(language)
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

