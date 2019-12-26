import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount} from 'enzyme';
import App from '../App';  
import EventNumber from '../EventNumber';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('the user hasn’t set the number of events to show,', () => {
        AppWrapper = mount(<App />);
        });

        when('the user go to the events pages,', () => {
        AppWrapper.update();
        });

        then(/^he will be shown (.*) events.$/, (arg0) => {
        expect((AppWrapper.find('.Event')).length).toBeLessThanOrEqual(32);

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants to adjust the numbers of events displayed,', () => {
        AppWrapper = mount(<App />);
        
        });

        when('the user changes the number of events to be displayed,', () => {
        
        AppWrapper.find('#numberOfEvents__input').simulate('change',  { target: { value: 10} });


        });
  
        then('the page will update to show the number of events selected.', () => {
        const NumberOfEventsWrapper = AppWrapper.find(EventNumber);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);

        });
    });

    

});