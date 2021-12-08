import React from 'react';
import Downshift from 'downshift';
import whatInput from 'what-input';
import Icons from '@components/Icons';
import {
  ButtonContainer,
  DropdownContainer,
  DropdownItem,
  DropdownSpacing,
  Input,
  InputHidden,
  Label,
} from './styles';

type Props = {
  placeholder: string;
  setValue: any;
  options: Array<string>;
  selectedItem: string;
  hasError: boolean;
  name?: string;
};

const Dropdown = ({
  placeholder,
  setValue,
  options,
  hasError,
  ...rest
}: Props) => (
  <Downshift
    onChange={(selection) => {
      setValue(selection);
    }}
    {...rest}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getToggleButtonProps,
      isOpen,
      highlightedIndex,
      selectedItem,
      getRootProps,
      toggleMenu,
    }) => (
      // @ts-ignore
      <ButtonContainer>
        <div
          // @ts-ignore {}  IS NOT VALID TYPESCRIPT
          {...getRootProps({}, { suppressRefError: true })}
          {...getToggleButtonProps()}
        >
          <InputHidden {...getInputProps()} />
          <Label {...getLabelProps()} hasSelected={!!selectedItem}>
            <h4>{placeholder}</h4>
          </Label>
          <Input
            hasFocus={isOpen}
            hasError={hasError}
            hasSelected={!!selectedItem}
            // @ts-ignore
            onFocus={() => {
              if (whatInput.ask() === 'keyboard') toggleMenu();
            }}
          >
            {selectedItem}&nbsp;
            <Icons icon="arrow" />
          </Input>
        </div>
        <DropdownContainer {...getMenuProps()}>
          {isOpen && (
            <>
              <DropdownSpacing />
              {options.map((item, index) => (
                <DropdownItem
                  {...getItemProps({
                    key: item,
                    index,
                    item,
                  })}
                  key={item}
                  highlightedIndex={highlightedIndex}
                  index={index}
                  item={item}
                  selectedItem={selectedItem}
                >
                  {item}
                </DropdownItem>
              ))}
              <DropdownSpacing />
            </>
          )}
        </DropdownContainer>
      </ButtonContainer>
    )}
  </Downshift>
);

export default Dropdown;
