import { Select } from './select/select';
import './select/styles.scss';

const select = new Select('#select', {
  placeholder: 'Выбери элемент',
  selectedId: '1',
  data: [
    { id: '1', value: 'React' },
    { id: '2', value: 'Vue' },
    { id: '3', value: 'Angular' },
    { id: '4', value: 'Electron' },
    { id: '5', value: 'TypeScript' },
    { id: '6', value: 'Webpack' },
    { id: '6', value: 'JavaScript' },
    { id: '7', value: 'Svelte' }
  ],
  onSelect(item) {
    console.log('Selected item', item)
  }
});

window.s = select;
