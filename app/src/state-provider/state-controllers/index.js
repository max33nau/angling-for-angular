import homeCtrl from '../home-state/home-ctrl';

const stateCtrls = angular.module( 'state-controllers', [] );

homeCtrl(stateCtrls);

export default stateCtrls.name;
