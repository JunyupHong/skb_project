import { Vue, Component } from "vue-property-decorator";
import Modal from '../components/modal';
import PromiseModal from '../components/promiseModal';
import MultiPromiseModal from '../components/multiPromiseModal';

Vue.use(Modal);
Vue.use(PromiseModal);
Vue.use(MultiPromiseModal);

@Component({})
export default class App extends Vue {
    
}
