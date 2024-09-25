import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormValidation from '../classComp/FormValidation'
import UseStateHooks from '../Components/UseStateHooks'
import LifeCycleUpdate from '../classComp/LifeCycleUpdate'
import StateExample from '../classComp/stateExample'
import Name from '../classComp/Name'
import UseRefHook from '../Components/UseRefHook'
import UseEffectPagination from '../Components/UseEffectPagination'
import UseReducerHook from '../Components/UseReducerHook'



const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Name />} />
                <Route path="/form" element={<FormValidation />} />
                <Route path="/life" element={<LifeCycleUpdate />} />
                <Route path="/state" element={<StateExample />} />
                <Route path="/usestate" element={<UseStateHooks />} />
                <Route path="/userefhook" element={<UseRefHook />} />
                <Route path="/useeffectpagination" element={<UseEffectPagination />} />
                <Route path="/useredhook" element={<UseReducerHook />} />
            





            </Routes>
        </>
    )
}

export default Router
