USE [master]
GO
/****** Object:  Database [LLLEmporium]    Script Date: 10/13/2021 6:07:21 PM ******/
CREATE DATABASE [LLLEmporium]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'LLLEmporium', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\LLLEmporium.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'LLLEmporium_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\LLLEmporium_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [LLLEmporium] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [LLLEmporium].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [LLLEmporium] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [LLLEmporium] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [LLLEmporium] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [LLLEmporium] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [LLLEmporium] SET ARITHABORT OFF 
GO
ALTER DATABASE [LLLEmporium] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [LLLEmporium] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [LLLEmporium] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [LLLEmporium] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [LLLEmporium] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [LLLEmporium] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [LLLEmporium] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [LLLEmporium] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [LLLEmporium] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [LLLEmporium] SET  DISABLE_BROKER 
GO
ALTER DATABASE [LLLEmporium] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [LLLEmporium] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [LLLEmporium] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [LLLEmporium] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [LLLEmporium] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [LLLEmporium] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [LLLEmporium] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [LLLEmporium] SET RECOVERY FULL 
GO
ALTER DATABASE [LLLEmporium] SET  MULTI_USER 
GO
ALTER DATABASE [LLLEmporium] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [LLLEmporium] SET DB_CHAINING OFF 
GO
ALTER DATABASE [LLLEmporium] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [LLLEmporium] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [LLLEmporium] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'LLLEmporium', N'ON'
GO
ALTER DATABASE [LLLEmporium] SET QUERY_STORE = OFF
GO
USE [LLLEmporium]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryName] [varchar](50) NOT NULL,
	[CategoryImageUrl] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderLines]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderLines](
	[Id] [uniqueidentifier] NOT NULL,
	[OrderId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[UnitPrice] [decimal](18, 0) NULL,
	[Quantity] [int] NULL,
	[Discount] [decimal](18, 0) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [uniqueidentifier] NOT NULL,
	[CustomerId] [uniqueidentifier] NOT NULL,
	[PaymentTypeId] [uniqueidentifier] NULL,
	[PaymentAccount] [varchar](50) NULL,
	[OrderTotal] [decimal](18, 0) NULL,
	[ShippingAddress] [varchar](50) NULL,
	[ShippingCity] [varchar](50) NULL,
	[ShippingState] [varchar](2) NULL,
	[ShippingZip] [varchar](10) NULL,
	[ShippingCost] [decimal](18, 0) NULL,
	[OrderDate] [datetime] NULL,
	[Completed] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentTypes]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentTypes](
	[Id] [uniqueidentifier] NOT NULL,
	[PaymentTypeName] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [uniqueidentifier] NOT NULL,
	[ProductTypeId] [uniqueidentifier] NOT NULL,
	[DesignerId] [uniqueidentifier] NOT NULL,
	[ProductName] [varchar](100) NOT NULL,
	[ProductDescription] [varchar](500) NULL,
	[ProductImageURL] [varchar](500) NULL,
	[Price] [decimal](12, 2) NULL,
	[InventoryCount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductTypes]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductTypes](
	[Id] [uniqueidentifier] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[TypeName] [varchar](50) NULL,
	[ProductTypeImageURL] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/13/2021 6:07:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [uniqueidentifier] NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[EmailAddress] [varchar](50) NULL,
	[IsDesigner] [int] NULL,
	[Bio] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Categories] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[OrderLines] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ((0)) FOR [Completed]
GO
ALTER TABLE [dbo].[PaymentTypes] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[ProductTypes] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [IsDesigner]
GO
ALTER TABLE [dbo].[OrderLines]  WITH CHECK ADD  CONSTRAINT [FK_OrderLines_Orders] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
GO
ALTER TABLE [dbo].[OrderLines] CHECK CONSTRAINT [FK_OrderLines_Orders]
GO
ALTER TABLE [dbo].[OrderLines]  WITH CHECK ADD  CONSTRAINT [FK_OrderLines_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[OrderLines] CHECK CONSTRAINT [FK_OrderLines_Products]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Customers]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_PaymentTypes] FOREIGN KEY([PaymentTypeId])
REFERENCES [dbo].[PaymentTypes] ([Id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_PaymentTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ProductTypes] FOREIGN KEY([ProductTypeId])
REFERENCES [dbo].[ProductTypes] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ProductTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Users] FOREIGN KEY([DesignerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Users]
GO
ALTER TABLE [dbo].[ProductTypes]  WITH CHECK ADD  CONSTRAINT [FK_ProductTypes_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[ProductTypes] CHECK CONSTRAINT [FK_ProductTypes_CategoryId]
GO
USE [master]
GO
ALTER DATABASE [LLLEmporium] SET  READ_WRITE 
GO
