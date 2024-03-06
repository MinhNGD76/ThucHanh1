var correctCount = localStorage.getItem('correctCount');

document.getElementById('correct').textContent += correctCount;
document.getElementById('incorrect').textContent += 40-correctCount;
document.getElementById('percentage').textContent += (results.correct / 40 * 100) + '%';