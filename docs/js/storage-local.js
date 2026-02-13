const STORAGE_KEY = 'ryd_posts';

export function loadPosts() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export function savePosts(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}