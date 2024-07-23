import Video from 'next-video';
import videopt1 from 'https://storage.googleapis.com/darcio-bentofolio/tpt1.mp4';

export default function VideoPt1() {
    return <Video src={videopt1} />;
}