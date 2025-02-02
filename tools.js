document.addEventListener('DOMContentLoaded', function() {
    // Sekme değiştirme fonksiyonları
    const toolButtons = document.querySelectorAll('.tool-btn');
    const toolSections = document.querySelectorAll('.tool-section');

    toolButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.id.replace('show', '').toLowerCase() + 'Section';
            
            toolButtons.forEach(btn => btn.classList.remove('active'));
            toolSections.forEach(section => section.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');

            // Dünya Saatleri sekmesi seçildiğinde saatleri güncelle
            if (button.id === 'showWorldClock') {
                updateClocks();
            }
        });
    });

    // Alarm fonksiyonları
    const alarmForm = document.getElementById('setAlarm');
    const alarmTime = document.getElementById('alarmTime');
    const alarmName = document.getElementById('alarmName');
    const activeAlarms = document.getElementById('activeAlarms');
    let alarms = [];

    if (alarmForm) {
        alarmForm.addEventListener('click', () => {
            if (!alarmTime.value || !alarmName.value) {
                alert('Lütfen alarm zamanı ve adını girin!');
                return;
            }

            const alarm = {
                id: Date.now(),
                time: alarmTime.value,
                name: alarmName.value,
                isActive: true
            };

            alarms.push(alarm);
            createAlarmElement(alarm);
            
            alarmTime.value = '';
            alarmName.value = '';

            // Alarmı kaydet
            localStorage.setItem('alarms', JSON.stringify(alarms));
        });
    }

    function createAlarmElement(alarm) {
        const alarmDiv = document.createElement('div');
        alarmDiv.className = 'alarm-item';
        alarmDiv.dataset.id = alarm.id;

        alarmDiv.innerHTML = `
            <div class="alarm-info">
                <span class="alarm-time">${formatTime(alarm.time)}</span>
                <span class="alarm-name">${alarm.name}</span>
            </div>
            <button class="danger-btn" onclick="removeAlarm(${alarm.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;

        activeAlarms.appendChild(alarmDiv);
        checkAlarm(alarm);
    }

    function formatTime(time) {
        const [hours, minutes] = time.split(':');
        return `${hours}:${minutes}`;
    }

    window.removeAlarm = function(id) {
        alarms = alarms.filter(alarm => alarm.id !== id);
        document.querySelector(`[data-id="${id}"]`).remove();
        localStorage.setItem('alarms', JSON.stringify(alarms));
    };

    function checkAlarm(alarm) {
        setInterval(() => {
            const now = new Date();
            const [alarmHours, alarmMinutes] = alarm.time.split(':');
            
            if (now.getHours() === parseInt(alarmHours) && 
                now.getMinutes() === parseInt(alarmMinutes) && 
                now.getSeconds() === 0) {
                alert(`Alarm: ${alarm.name}`);
            }
        }, 1000);
    }

    // Kronometre fonksiyonları
    let stopwatchInterval;
    let startTime;
    let elapsedTime = 0;
    let isRunning = false;
    let laps = [];

    const stopwatchDisplay = document.getElementById('stopwatchTime');
    const stopwatchMs = document.getElementById('stopwatchMs');
    const startButton = document.getElementById('startStopwatch');
    const pauseButton = document.getElementById('pauseStopwatch');
    const resetButton = document.getElementById('resetStopwatch');
    const lapButton = document.getElementById('lapButton');
    const lapList = document.getElementById('lapList');

    if (startButton) {
        startButton.addEventListener('click', startStopwatch);
        pauseButton.addEventListener('click', pauseStopwatch);
        resetButton.addEventListener('click', resetStopwatch);
        lapButton.addEventListener('click', addLap);
    }

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime;
            stopwatchInterval = setInterval(updateStopwatch, 10);
            
            startButton.disabled = true;
            pauseButton.disabled = false;
            resetButton.disabled = false;
            lapButton.disabled = false;
        }
    }

    function pauseStopwatch() {
        if (isRunning) {
            isRunning = false;
            clearInterval(stopwatchInterval);
            
            startButton.disabled = false;
            pauseButton.disabled = true;
        }
    }

    function resetStopwatch() {
        isRunning = false;
        clearInterval(stopwatchInterval);
        elapsedTime = 0;
        laps = [];
        updateStopwatchDisplay();
        updateLapList();
        
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;
        lapButton.disabled = true;
    }

    function updateStopwatch() {
        elapsedTime = Date.now() - startTime;
        updateStopwatchDisplay();
    }

    function updateStopwatchDisplay() {
        const time = new Date(elapsedTime);
        const minutes = time.getUTCMinutes().toString().padStart(2, '0');
        const seconds = time.getUTCSeconds().toString().padStart(2, '0');
        const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
        
        stopwatchDisplay.textContent = `${minutes}:${seconds}`;
        stopwatchMs.textContent = `.${milliseconds}`;
    }

    function addLap() {
        const lapTime = elapsedTime;
        const previousLap = laps[laps.length - 1] || 0;
        const lapDuration = lapTime - previousLap;
        
        laps.push(lapTime);
        updateLapList();
    }

    function updateLapList() {
        lapList.innerHTML = '';
        laps.forEach((lap, index) => {
            const previousLap = laps[index - 1] || 0;
            const lapDuration = lap - previousLap;
            
            const li = document.createElement('li');
            li.className = 'lap-item';
            li.innerHTML = `
                <span>Tur ${index + 1}</span>
                <span>${formatLapTime(lapDuration)}</span>
            `;
            lapList.insertBefore(li, lapList.firstChild);
        });
    }

    function formatLapTime(time) {
        const date = new Date(time);
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        const milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
        return `${minutes}:${seconds}.${milliseconds}`;
    }

    // Kayıtlı alarmları yükle
    const savedAlarms = JSON.parse(localStorage.getItem('alarms') || '[]');
    savedAlarms.forEach(alarm => {
        alarms.push(alarm);
        createAlarmElement(alarm);
    });
}); 
