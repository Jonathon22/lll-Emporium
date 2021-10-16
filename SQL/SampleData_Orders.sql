INSERT INTO Orders ( CustomerId, ShippingAddress, ShippingCity,
					 ShippingState, ShippingZip, OrderDate, Completed )
VALUES ((SELECT Id from Users where FirstName = 'Honey-Rae'), '1000 Something', 'Boston',
        'MA', '02113', CURRENT_TIMESTAMP, '0'),
		((SELECT Id from Users where FirstName = 'John'), '710 Seven Mile Ct','Nashville',
        'TN', '37211', CURRENT_TIMESTAMP, '0')