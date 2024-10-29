/**
 * 查询URL参数
 *
 * @param key 参数名
 * @param type 参数查找类型
 * @returns 返回参数值，如果未找到则返回null
 */
export function queryUrlParams(
  key: string,
  type: 'search' | 'hash' = 'search',
): string | null {
  if (type === 'search') {
    // 获取当前URL的search部分并解析成对象
    const searchParams = new URLSearchParams(window.location.search);
    // 尝试从search参数中获取值
    return searchParams.get(key);
  } else {
    // 获取当前页面的哈希值
    const hash = window.location.hash;
    // 使用正则表达式匹配 ? 后面的内容
    const match = hash.match(/\?(.*)/);

    const hashParams = new URLSearchParams(match ? match[1] : '');
    return hashParams.get(key);
  }
}
