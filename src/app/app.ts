import { Vue, Component } from "vue-property-decorator";
import Modal from '../components/modal';
import AsyncModal from '../components/asyncModal';

Vue.use(Modal);
Vue.use(AsyncModal);

@Component({})
export default class App extends Vue {
    
}
