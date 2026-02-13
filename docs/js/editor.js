export function initEditor(root) {
    root.innerHTML = `
    <h2>Editor</h2>
    <textarea data-testid="editor-input"></textarea>
    <button data-testid="editor-submit">Speichern</button>
  `;
}