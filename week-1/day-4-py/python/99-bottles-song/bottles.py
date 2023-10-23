def bottle_song(num):
	
	if num == 1:
		print(f'1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
	else:
		print(f'{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottles of beer on the wall.')
		return bottle_song(num-1)

print(bottle_song(99))

####kldjsfalkfdajalskdfjdfls