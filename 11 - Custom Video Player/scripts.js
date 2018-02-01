/* Get Our Element */
const $ = function (name, ele) {
  return ele ? ele.querySelector(name) : document.querySelector(name)
}
const player = $('.player')
const video = $('.viewer', player)
const progress = $('.progress', player)
const progressBar = $('.progress__filled', player)
const toggle = $('.toggle', player)
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

/* build out function */
function togglePlay () {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton () {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip () {
  video.currentTime += parseFloat(this.dataset.skip)
}

// Control playback rate or volume size
function handleRangeUpdate () {
  video[this.name] = this.value
}

function handleProgress () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime;
}

/* Hook up the event eistners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))