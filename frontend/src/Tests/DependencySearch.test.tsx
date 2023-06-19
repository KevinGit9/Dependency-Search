import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DependencySearch from '../components/DependencySearch';
import { SearchDependency } from '../services/DependencyService';

jest.mock('../services/DependencyService', () => ({
  SearchDependency: jest.fn(),
}));

describe('DependencySearch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  test('handleChange updates dependencyName state', async () => {
    render(<DependencySearch searchResults={() => { }} />);

    //Get the input element with the placeholder 'Search dependency...'. This should be the field for the dependency name.
    //Change the field to 'exampleDependency'.
    const inputElement = screen.getByPlaceholderText('Search dependency...') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'exampleDependency' } });

    //Check if the value changed to 'exampleDependecy'
    await waitFor(() => {
      expect(inputElement.value).toBe('exampleDependency');
    });
  });

  
  test('handleOptionChange updates selectedOption state', () => {
    render(<DependencySearch searchResults={() => { }} />);

    //Get the select version options and set the option to Version Range.
    const selectElement = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.change(selectElement, { target: { value: 'Version Range' } });

    //Check if option got changed to Version Range.
    expect(selectElement.value).toBe('Version Range');
  });


  test('handleSearch performs search', async () => {
    render(<DependencySearch searchResults={() => {}} />);
    
    //Get the input element with the placeholder 'Search dependency...'. This should be the field for the dependency name.
    //Change the field to 'exampleDependency'.
    const dependencyNameInput = screen.getByPlaceholderText('Search dependency...') as HTMLInputElement;
    fireEvent.change(dependencyNameInput, { target: { value: 'exampleDependency' } });
  
    expect(dependencyNameInput.value).toBe('exampleDependency');
    
    //Get the select version options and set the option to Version Specific. This is the default but changing it for clarity.
    const selectInput = screen.getByRole('combobox');
    fireEvent.change(selectInput, { target: { value: 'Version Specific' } });
    
    //Input '1.2.0' and checks if it is correctly assigned.
    const versionInput = screen.getByLabelText('Version:') as HTMLInputElement;
    fireEvent.change(versionInput, { target: { value: '1.2.0' } });
  
    expect(versionInput.value).toBe('1.2.0');
    
    //Click on the search button and check if it uses the expected values.
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
  
    expect(SearchDependency).toHaveBeenCalledWith('exampleDependency', '1.2.0', '1.2.0');
  });


  test('resetVersions resets fromVersion and toVersion states', () => {
    render(<DependencySearch searchResults={() => { }} />);

    //Get the select version options and set the option to Version From.
    const selectInput = screen.getByRole('combobox');
    fireEvent.change(selectInput, { target: { value: 'Version From' } });

    //Sets fromVersion to '1.0.0' and checks if it is correctly assigned.
    const fromVersionInput = screen.getByLabelText('From Version:') as HTMLInputElement;
    fireEvent.change(fromVersionInput, { target: { value: '1.0.0' } });

    expect(fromVersionInput.value).toBe('1.0.0');

    //Change option to Version To to assign something to toVersion.
    fireEvent.change(selectInput, { target: { value: 'Version To' } });

    //Sets toVersion to '2.0.0' and checks if it is correctly assigned.
    const toVersionInput = screen.getByLabelText('To Version:') as HTMLInputElement;
    fireEvent.change(toVersionInput, { target: { value: '2.0.0' } });

    expect(toVersionInput.value).toBe('2.0.0');

    //Change option to Version Specific and check if the fromVersion field is reset to ''.
    fireEvent.change(selectInput, { target: { value: 'Version Specific' } });

    expect(fromVersionInput.value).toBe('');
    expect(toVersionInput.value).toBe('');
  });


  test('scrollDown scrolls the window', async () => {
    const scrollByMock = jest.fn();
    Object.defineProperty(window, 'scrollBy', { value: scrollByMock });

    render(<DependencySearch searchResults={() => { }} />);

    //Get the input element with the placeholder 'Search dependency...'. This should be the field for the dependency name.
    //Change the field to 'exampleDependency'.
    const dependencyNameInput = screen.getByPlaceholderText('Search dependency...') as HTMLInputElement;
    fireEvent.change(dependencyNameInput, { target: { value: 'exampleDependency' } });

    expect(dependencyNameInput.value).toBe('exampleDependency');

    //Get the select version options and set the option to Version From.
    const selectInput = screen.getByRole('combobox');
    fireEvent.change(selectInput, { target: { value: 'Version From' } });

    //Sets fromVersion to '1.0.0' and checks if it is correctly assigned.
    const fromVersionInput = screen.getByLabelText('From Version:') as HTMLInputElement;
    fireEvent.change(fromVersionInput, { target: { value: '1.0.0' } });

    expect(fromVersionInput.value).toBe('1.0.0');

    //Get the Search button. Click on the search button with a succesfull search which should then trigger the scrollDown function.
    const scrollButton = screen.getByText('Search');
    fireEvent.click(scrollButton);

    await waitFor(() => {
      expect(scrollByMock).toHaveBeenCalledWith({
        top: expect.any(Number),
        behavior: 'smooth',
      });
    });
  });
});
