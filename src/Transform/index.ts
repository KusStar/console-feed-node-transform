import Arithmetic from './arithmetic'
import Function from './Function'
import Map from './Map'

import Replicator from './replicator'

const transforms = [Function, Arithmetic, Map]

const replicator = new Replicator()
replicator.addTransforms(transforms)

export function Encode<T>(data: any): any[] {
  return JSON.parse(replicator.encode(data))
}

export function Decode(data: any): any[] {
  return replicator.decode(JSON.stringify(data))
}
