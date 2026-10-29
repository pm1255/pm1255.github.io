const contentDir = 'contents/'
const contentVersion = 'cv20261029b'
const sectionNames = ['home', 'papers', 'internship', 'awards']
const localizedSections = new Set(['home', 'internship', 'awards'])
const supportedLanguages = new Set(['en', 'zh'])
const supportedThemes = new Set(['light', 'dark'])

let activeLanguage = 'en'

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
        'dark-mode': 'Dark',
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
        'date-14': 'Oct 26, 2026',
        'update-1': 'is now online with its project page, code, and model resources.',
        'update-2': 'was accepted to NeurIPS 2026.',
        'update-3': 'was presented orally at INFOCOM 2026 in Tokyo, Japan.',
        'update-4': 'was presented orally at INFOCOM 2026 in Tokyo, Japan.',
        'update-5': 'was accepted to ICML 2026.',
        'update-6': 'was accepted to ACL Findings 2026.',
        'update-7': 'was accepted to INFOCOM 2026.',
        'update-8': 'was accepted to INFOCOM 2026.',
        'update-9': 'was accepted to AAAI 2026.',
        'update-10': 'was accepted to AAAI 2026.',
        'update-11': 'was accepted to AAAI 2026.',
        'update-12': 'was presented orally in Room Barcelona at ICCAD 2025 in Munich, Germany.',
        'update-13': 'was accepted to ICCAD 2025.',
        'update-14': 'is now available with its paper, project page, and code.',
        'kicker-publications': 'Research',
        'publications-title': 'Papers',
        'paper-filter-bar': 'Paper topics',
        'paper-filter-all': 'All',
        'paper-filter-networks': 'Computer Networks',
        'paper-filter-trust': 'Trustworthy AI & Security',
        'paper-filter-agents': 'Multimodal Agents & RL',
        'paper-filter-embodied': 'Embodied Intelligence',
        'code-link': 'Code',
        'project-link': 'Project page',
        'model-link': 'Model',
        'dataset-link': 'Dataset',
        'artifacts-link': 'Models & data',
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
        'dark-mode': '暗色',
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
        'date-14': '2026 年 10 月 26 日',
        'update-1': '已上线，项目主页、代码和模型资源同步公开。',
        'update-2': '已被 NeurIPS 2026 录用。',
        'update-3': '于 2026 年在日本东京举行的 INFOCOM 2026 上作了口头报告。',
        'update-4': '于 2026 年在日本东京举行的 INFOCOM 2026 上作了口头报告。',
        'update-5': '已被 ICML 2026 录用。',
        'update-6': '已被 ACL Findings 2026 录用。',
        'update-7': '已被 INFOCOM 2026 录用。',
        'update-8': '已被 INFOCOM 2026 录用。',
        'update-9': '已被 AAAI 2026 录用。',
        'update-10': '已被 AAAI 2026 录用。',
        'update-11': '已被 AAAI 2026 录用。',
        'update-12': '在德国慕尼黑举行的 ICCAD 2025 上于 Barcelona 会议室作了口头报告。',
        'update-13': '已被 ICCAD 2025 录用。',
        'update-14': '论文、项目主页和代码现已公开。',
        'kicker-publications': '研究',
        'publications-title': '论文',
        'paper-filter-bar': '论文领域',
        'paper-filter-all': '全部',
        'paper-filter-networks': '计算机网络',
        'paper-filter-trust': '可信人工智能与安全',
        'paper-filter-agents': '多模态智能体与强化学习',
        'paper-filter-embodied': '具身智能',
        'code-link': '代码',
        'project-link': '项目主页',
        'model-link': '模型',
        'dataset-link': '数据集',
        'artifacts-link': '模型与数据',
    },
}


const paperCategoryRules = [
    { key: 'networks', matches: ['regret-optimal', 'sampling the ornstein', 'fractional reinforcement'] },
    { key: 'trust', matches: ['ragfort', 'do not merge'] },
    { key: 'agents', matches: ['dtca:', 'mitigating manifold', 'gft:', 'ground what you see', 'verirl', 'sare:', 'spatial-interactor', 'show,'] },
    { key: 'embodied', matches: ['vla-corrector', 'vla-δ', 'embodied-navigator', 'rubrics4vla', 'embodiedmemory', 'scene-designer', 'stabilizing rl'] },
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

function getInitialTheme() {
    try {
        const savedTheme = window.localStorage.getItem('homepage-theme')
        if (supportedThemes.has(savedTheme)) return savedTheme
    } catch (error) {
        console.info('Theme preference is unavailable:', error)
    }

    return 'light'
}

function updateThemeControl(theme) {
    const button = document.querySelector('.day-toggle')
    if (!button) return

    const isDark = theme === 'dark'
    const icon = button.querySelector('.day-toggle-icon')
    const label = button.querySelector('[data-theme-label]') || button.querySelector('[data-i18n="day-mode"]')
    const languageCopy = copy[activeLanguage] || copy.en

    if (icon) icon.textContent = isDark ? '☾' : '☼'
    if (label) {
        label.textContent = isDark ? languageCopy['dark-mode'] : languageCopy['day-mode']
        label.setAttribute('data-i18n', isDark ? 'dark-mode' : 'day-mode')
    }
    button.setAttribute('aria-pressed', String(isDark))
    button.setAttribute('aria-label', isDark
        ? (activeLanguage === 'zh' ? '切换到白天模式' : 'Switch to day mode')
        : (activeLanguage === 'zh' ? '切换到暗色模式' : 'Switch to dark mode'))
    button.classList.toggle('is-dark', isDark)
}

function applyTheme(theme, persist = false) {
    const nextTheme = supportedThemes.has(theme) ? theme : 'light'
    document.documentElement.dataset.theme = nextTheme
    document.body?.setAttribute('data-theme', nextTheme)

    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.setAttribute('content', nextTheme === 'dark' ? '#181323' : '#fffaff')
    updateThemeControl(nextTheme)

    if (persist) {
        try {
            window.localStorage.setItem('homepage-theme', nextTheme)
        } catch (error) {
            console.info('Theme preference could not be saved:', error)
        }
    }
}

function setupTheme() {
    const button = document.querySelector('.day-toggle')
    if (!button) return

    applyTheme(getInitialTheme())
    button.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme || 'light'
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true)
    })
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
    activeLanguage = language
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

    updateThemeControl(document.documentElement.dataset.theme || 'light')
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
    if (!root.classList.contains('paper-stream')) return

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

function setupPaperFilters(language) {
    const bar = document.querySelector('.paper-filter-bar')
    const root = document.getElementById('papers-md')
    if (!bar || !root) return

    const items = [...root.querySelectorAll(':scope > ul > li')]
    const buttons = [...bar.querySelectorAll('[data-paper-filter]')]
    const countNode = bar.querySelector('.paper-count')

    items.forEach(item => {
        const title = item.querySelector('strong')?.textContent.trim().toLowerCase() || ''
        const rule = paperCategoryRules.find(candidate => candidate.matches.some(match => title.includes(match)))
        item.dataset.paperCategory = rule?.key || 'agents'
    })

    const update = selected => {
        let visible = 0
        items.forEach(item => {
            const show = selected === 'all' || item.dataset.paperCategory === selected
            item.hidden = !show
            if (show) visible += 1
        })
        buttons.forEach(button => {
            const active = button.dataset.paperFilter === selected
            button.classList.toggle('is-active', active)
            button.setAttribute('aria-pressed', String(active))
        })
        if (countNode) {
            countNode.textContent = language === 'zh'
                ? `${visible} 篇论文`
                : `${visible} ${visible === 1 ? 'paper' : 'papers'}`
        }
    }

    buttons.forEach(button => {
        button.onclick = () => update(button.dataset.paperFilter)
    })
    const active = buttons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.paperFilter || 'all'
    update(active)
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

        const shouldUseRawHtml = sectionName === 'internship' || sectionName === 'awards'
        target.innerHTML = shouldUseRawHtml ? contents[index] : marked.parse(contents[index])
        decorateActionLinks(target)
        if (target.id === 'papers-md') {
            decoratePaperTitles(target)
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
    setupTheme()
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

