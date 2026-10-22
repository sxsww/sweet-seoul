import {Link} from 'react-router';
import s from './NotFoundPage.module.css';
export function NotFoundPage(){return <div className={s.page}><h1>Страница не найдена</h1><Link to="/">На главную</Link></div>}
