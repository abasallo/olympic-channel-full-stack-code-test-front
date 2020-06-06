import React from 'react'

import { shallow } from 'enzyme'

import Main from './Main'

test('Renders properly', () => expect(shallow(<Main />)).toMatchSnapshot())
