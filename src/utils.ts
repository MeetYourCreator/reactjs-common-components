export const detectTrackPad = (e: any) => {
  let isTrackPad = false;
  if (e.wheelDeltaY) {
    if (e.wheelDeltaY === e.deltaY * -3) {
      isTrackPad = true;
      console.log(e.wheelDeltaY);
    }
  } else if (e.deltaMode === 0) {
    isTrackPad = true;
  }
  console.log(
    isTrackPad ? `TrackPad detected: ${e.wheelDeltaY}` : 'MouseWheel detected'
  );
  document.addEventListener('mousewheel', detectTrackPad, false);
  document.addEventListener('DOMMouseScroll', detectTrackPad, false);
};

export const placeholderArray: Array<string> = [
  'cat',
  'california',
  'dog',
  'orange',
  'red',
  'hello',
  'hey',
  'hippo',
];
