import {loadColorUpdater} from 'tsparticles-updater-color';
import {loadCircleShape} from 'tsparticles-shape-circle';
import {loadBaseMover} from 'tsparticles-move-base';
import {loadSizeUpdater} from 'tsparticles-updater-size';
import {loadOpacityUpdater} from 'tsparticles-updater-opacity';
import {loadOutModesUpdater} from 'tsparticles-updater-out-modes';
import {loadExternalAttractInteraction} from 'tsparticles-interaction-external-attract';

export async function particlesInit(engine) {
  await loadColorUpdater(engine);
  await loadCircleShape(engine);
  await loadBaseMover(engine);
  await loadSizeUpdater(engine);
  await loadOpacityUpdater(engine);
  await loadOutModesUpdater(engine);
  await loadExternalAttractInteraction(engine);
}