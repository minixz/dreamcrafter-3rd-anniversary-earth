import './styles.css';

import * as contentMover from './content-mover';
import * as asyncImageLoader from './async-image-loader';

contentMover.start();
asyncImageLoader.loadAll();
