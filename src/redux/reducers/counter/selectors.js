import {createSelector} from 'reselect'

const selectGlobal = state => state.counter

const makeSelectItems = () => createSelector(
    selectGlobal,
    substate => substate
)

export {
    makeSelectItems
}