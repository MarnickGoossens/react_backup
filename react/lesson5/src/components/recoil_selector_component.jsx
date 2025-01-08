import { useRecoilValue } from 'recoil';
import { textSizeState } from '../store';

export default function SelectorComponent() {
  const text = useRecoilValue(textSizeState);
  return (
    <p>
      Number of characters in the atom: <i>{Number(text)}</i>
    </p>
  );
}