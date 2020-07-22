import { Vue, Component } from "vue-property-decorator";
import Modal from '../components/modal';
import PromiseModal from '../components/promiseModal';

Vue.use(Modal);
Vue.use(PromiseModal);

@Component({})
export default class App extends Vue {
    
}
