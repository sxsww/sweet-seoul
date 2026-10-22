import {Banner} from '../../components/Banner/Banner';
import {Catalog} from '../../components/Catalog/Catalog';
import {Form} from '../../components/Form/Form';
import styles from './HomePage.module.css';
export function HomePage(){return <div className={styles.page}><Banner/><Catalog/><Form/></div>}
