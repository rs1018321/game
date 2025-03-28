// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 添加链接卡片的点击效果
    const cards = document.querySelectorAll('.link-card');
    
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = '';
        });
        
        // 添加随机颜色变化
        const randomColor = getRandomColor(0.8);
        const iconElement = card.querySelector('.icon');
        if (iconElement) {
            iconElement.style.backgroundColor = randomColor;
        }
    });
    
    // 生成随机浅色
    function getRandomColor(opacity) {
        const hue = Math.floor(Math.random() * 360);
        return `hsla(${hue}, 70%, 80%, ${opacity})`;
    }
});
