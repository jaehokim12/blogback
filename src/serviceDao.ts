import * as serviceQuery from './service'
import * as database from './database'

export const serviceOne = database.executeQuery(serviceQuery.queryone)
export const serviceTwo = database.executeQuery(serviceQuery.queryone)