import { renderHeader } from './container/header'
import { renderMain } from './container/main'
import { renderUser } from './container/user'
import { renderAlbums } from './container/albums'
import './styles/main.scss';

renderHeader();
renderMain();
renderUser(); // асинхронная
// renderAlbums();