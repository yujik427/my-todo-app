// localStorage ユーティリティ関数

const STORAGE_KEY = 'todo-app-data';

// データを localStorage に保存
export const saveTodosToStorage = (todos) => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, serializedTodos);
    console.log('✅ Saved todos to localStorage:', todos);
  } catch (error) {
    console.error('Failed to save todos to localStorage:', error);
  }
};

// データを localStorage から読み込み
export const loadTodosFromStorage = () => {
  try {
    const serializedTodos = localStorage.getItem(STORAGE_KEY);
    if (serializedTodos === null) {
      console.log('ℹ️ No data found in localStorage, returning empty array');
      return []; // データがない場合は空配列を返す
    }
    const parsed = JSON.parse(serializedTodos);
    console.log('✅ Loaded todos from localStorage:', parsed);
    return parsed;
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
    return []; // エラーが発生した場合は空配列を返す
  }
};


