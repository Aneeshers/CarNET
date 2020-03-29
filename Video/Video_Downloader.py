import cv2
print(cv2.__version__)
video_dir = ''
vidcap = cv2.VideoCapture(video_dir)
success,image = vidcap.read()
count = 0
while success:
  cv2.imwrite("frame%d.jpg" % count, image)     # save frame as JPEG file
  success,image = vidcap.read()
  print ('Read a new frame: ', success)
  count += 1
