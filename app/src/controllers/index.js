import badExampleCtrl from './badExampleCtrl';
import goodExampleCtrl from './goodExampleCtrl';

const controllers = angular.module( 'controllers', []);

badExampleCtrl(controllers);
goodExampleCtrl(controllers);

export default controllers.name;
