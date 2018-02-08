import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import List from './List';

describe("<List />", ()=>{
    it("Should Render a list with 4 elements inside", () => {
        const listLoader = sinon.spy();

        const component = shallow(
            <List
                data={[1,2,3,4]}
                loadFunc={listLoader}
                hasMore={false}
                renderRow={row => {
                    return (
                        <div>{row}</div>
                    );
                }}
            />
        );

        expect(component.children().children()).to.have.length(4);
        expect(listLoader).to.have.property('callCount', 0);

    });
});
