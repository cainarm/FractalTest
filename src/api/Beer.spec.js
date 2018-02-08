import { expect } from 'chai';
import * as API from './Beer';

describe('beer api endpoint test', () => {
  it('should fetch a list of beers', async () => {
    let response = await API.getBeers(1);
    
    expect(response.status).to.equal(200);
    expect(response.data).to.have.length(15);
  });

  it('should fetch a single beer', async () => {
    let response = await API.getBeerById(1);
    
    expect(response.status).to.equal(200);
    expect(response.data).to.have.length(1);
  });
});
