import React from 'react'

import { shallow } from 'enzyme'

import Detail from './Detail'

test('Renders properly', () => expect(shallow(<Detail />)).toMatchSnapshot())
