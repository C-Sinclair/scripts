import fetch from 'node-fetch';
import r from 'ramda'

global.fetch = fetch;
global.pipe = r.pipe;

/**
 * Command Line Arguments
 */
const [,, $1] = process.argv

global.$1 = $1