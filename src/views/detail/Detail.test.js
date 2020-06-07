import React from 'react'

import Detail from './Detail'

test('Renders properly', () => expect(<Detail match={{ params: { id: 1 }, isExact: true, path: '', url: '' }} />).toMatchSnapshot())
