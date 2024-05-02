<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let data
  export let selname
  export let inpname
  export let fieldValue: string
  export let selValue:string

  
  function convert(){
    dispatch('input', {
			fieldValue: fieldValue,
      selValue: selValue
		});
  }
</script>
<div class="currency">
{#if data}
<p>
  <select id={selname} class="switchcurrency" name={selname} bind:value={selValue} on:change={convert}>
    {#each Object.keys(data) as currency}
      <option value={currency}>{currency}</option>
    {/each}
  </select>
</p>
{/if}
<div>
  <input class="textcurrency" id={inpname} name={inpname}
    bind:value={fieldValue}
    placeholder="Введите валюту"
    size="18"
    on:input={convert}
  />
</div>
</div>
<style>
  .currency{
    flex-direction: column;
    margin: 1em;
  }
  .textcurrency{
    width: 300px;
    height: 5em;
    font-size: 13px;
    padding: 1px 0 4px 10px;
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 8px;
    font-size: 25px;
    font-family: inherit;
  }
  .switchcurrency{
    width: 100px;
    height: 2em;
    padding: 4px 0 4px 10px;
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 8px;
    font-size: 15px;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
  }
</style>
