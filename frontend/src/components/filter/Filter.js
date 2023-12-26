import React from 'react';
import './Filter.scss';

export default function Filter() {
  return (
    <div className='filter-body d-flex flex-column'>
        <form>
            <div className='categories-box'>
                <label className='category-heading' for="categories" class="form-label">Categories (Continents)</label>
                <input class="form-control" list="categories" name="category" id="category" />
                <datalist id="categories">
                    <option value="Africa"/>
                    <option value="Asia" />
                    <option value="Australia" />
                    <option value="Europe" />
                    <option value="North America" />
                    <option value="South America" />
                </datalist>
            </div>

            <div className='countries-box'>
                <label className='country-heading' for="countries">Choose Country:</label>
                <input class="form-control" type="text" id="country" name="country" />
                <datalist id="countries">
                    <option value="Africa"/>
                    <option value="Asia" />
                    <option value="Australia" />
                    <option value="Europe" />
                    <option value="North America" />
                    <option value="South America" />
                </datalist>
            </div>

            <div className='traveling-box'>
                <p className='traveling-heading'>Traveling With:</p>
                <div className='select-check'>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="myself" name="myself" value="something" />
                        <label class="form-check-label" for="myself">Myself</label>
                    </div>
                    <div class="form-check mt-1">
                        <input type="checkbox" class="form-check-input" id="family" name="family" value="something" />
                        <label class="form-check-label" for="family">Family</label>
                    </div>

                    <div class="form-check mt-1">
                        <input type="checkbox" class="form-check-input" id="friends" name="friends" value="something" />
                        <label class="form-check-label" for="friends">Friends</label>
                    </div>
                </div>

                <div className='other-check'>
                    <div class="form-check mt-1">
                        <input type="checkbox" class="form-check-input" id="other" name="other" value="something" />
                        <label class="form-check-label" for="check2">Other</label>
                    </div>
                    <div class="input-group input-group-sm mb-3 mt-3">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                        placeholder='Other' />
                    </div>
                </div>
            </div>

            <div className='uploads'>
                <p className='upload-heading'>Upload</p>
                <div className='upload-body d-flex'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Images
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Videos
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
