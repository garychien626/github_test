const stamp = document.getElementById("stamp");

if (stamp) {
  const now = new Date();
  stamp.textContent = `本地演示页 · 打开于 ${now.toLocaleString("zh-CN")}`;
}
