// 简单的访问计数器实现
document.addEventListener('DOMContentLoaded', function() {
    // 从localStorage获取访问次数
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    
    // 增加访问次数
    visitorCount = parseInt(visitorCount) + 1;
    
    // 更新localStorage
    localStorage.setItem('visitorCount', visitorCount);
    
    // 更新显示
    document.getElementById('visitor-count').textContent = visitorCount;
});