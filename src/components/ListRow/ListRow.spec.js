import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ListRow from './index';

describe("<ListRow />", ()=>{
    it("Should Render a list row with a hello message", () => {
        const component = shallow(<ListRow content="Hello" />);

        expect(component.find('div').text()).to.equal("Hello");
    });
});
