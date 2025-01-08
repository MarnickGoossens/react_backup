import { useSetRecoilState } from 'recoil';
import { textState } from '../store';

export default function UpdateComponent() {
  const setText = useSetRecoilState(textState

  )
  function onChange(event) {
    setText(event.target.value)
  };

  return (
    <>
      Change the atom value here: <input type="text" onChange={onChange} />
    </>
  );
}