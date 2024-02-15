import DetialBox from './DetailBox';

export default function Modal({ onClose, id, isOpen }) {
  return (
    <>
      <div className={`detail-modal ${!isOpen && 'hide'}`}>
        <DetialBox onClose={onClose} id={id} />
      </div>
      <div className={`overlay ${!isOpen && 'hide'}`}></div>
    </>
  );
}
