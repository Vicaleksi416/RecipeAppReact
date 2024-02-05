import DetialBox from '../components/DetailBox';

export default function Modal() {
  const modal = document.querySelector('.detail-modal');
  const overlay = document.querySelector('.overlay');

  overlay.addEventListener('click', () => {
    modal.classList.add('hide');
    overlay.classList.add('hide');
  });

  return (
    <>
      <div className="detail-modal hide">
        <DetialBox />
      </div>
      <div className="overlay hide"></div>
    </>
  );
}
