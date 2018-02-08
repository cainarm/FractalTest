import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ListRow from './index';

describe("<ListRow />", ()=>{
    it("Should Render a list row with a hello message", () => {
        const component = shallow(<ListRow content="Hello" tagline="Hello Again"/>);

        expect(component.find('div').children()).to.have.length(2);
        expect(component.find('div').text()).to.contain("Hello");
        expect(component.find('div').text()).to.contain("Hello Again");
    });
});
