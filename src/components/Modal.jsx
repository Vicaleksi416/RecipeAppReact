import DetialBox from '../components/DetailBox';

export default function Modal() {
  return (
    <>
      <div className="detail-modal hide">
        <DetialBox />
      </div>
      <div className="overlay hide"></div>
    </>
  );
}
