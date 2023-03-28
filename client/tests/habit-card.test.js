import { describe, it } from 'jest';
import { shallow } from 'enzyme';
import React from 'react';
import HabitCard from '../components/habit-card/habit-card.component.jsx';

describe('HabitCard', () => {
  const habit = shallow(<HabitCard description="Habit Description" type="daily"/>);
  it('renders without crashing', () => {
    expect(habit).toMatchSnapshot();
  })
  it('renders the habit description', () => {
    expect(habit.find('h3').text()).toEqual('Habit Description');
  })
  it('renders the habit type', () => {
    expect(habit.find('h4').text()).toEqual('daily');
  })
})

