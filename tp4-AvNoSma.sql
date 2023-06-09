USE [master]
GO
/****** Object:  Database [tp4-AvNoSma]    Script Date: 9/6/2023 12:02:36 ******/
CREATE DATABASE [tp4-AvNoSma]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tp4-AvNoSma', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\tp4-AvNoSma.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'tp4-AvNoSma_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\tp4-AvNoSma_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [tp4-AvNoSma] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [tp4-AvNoSma].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [tp4-AvNoSma] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET ARITHABORT OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [tp4-AvNoSma] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [tp4-AvNoSma] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET  DISABLE_BROKER 
GO
ALTER DATABASE [tp4-AvNoSma] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [tp4-AvNoSma] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET RECOVERY FULL 
GO
ALTER DATABASE [tp4-AvNoSma] SET  MULTI_USER 
GO
ALTER DATABASE [tp4-AvNoSma] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [tp4-AvNoSma] SET DB_CHAINING OFF 
GO
ALTER DATABASE [tp4-AvNoSma] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [tp4-AvNoSma] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [tp4-AvNoSma] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'tp4-AvNoSma', N'ON'
GO
ALTER DATABASE [tp4-AvNoSma] SET QUERY_STORE = OFF
GO
USE [tp4-AvNoSma]
GO
/****** Object:  User [Personajes]    Script Date: 9/6/2023 12:02:36 ******/
CREATE USER [Personajes] FOR LOGIN [Personajes] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 9/6/2023 12:02:36 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personajes]
GO
/****** Object:  Table [dbo].[Peliserie]    Script Date: 9/6/2023 12:02:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliserie](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](200) NULL,
	[titulo] [varchar](100) NULL,
	[fechaCreacion] [date] NULL,
	[calificacion] [int] NULL,
 CONSTRAINT [PK_Peliserie] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 9/6/2023 12:02:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](200) NULL,
	[nombre] [varchar](50) NULL,
	[edad] [int] NULL,
	[peso] [float] NULL,
	[historia] [varchar](200) NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje_X_Peliserie]    Script Date: 9/6/2023 12:02:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje_X_Peliserie](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fk_idPelicula] [int] NOT NULL,
	[fk_idPersonaje] [int] NOT NULL,
 CONSTRAINT [PK_Personaje_X_Peliserie] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Peliserie] ON 

INSERT [dbo].[Peliserie] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (1, N'vdnbwih', N'MiMu', CAST(N'2006-11-11' AS Date), 3)
INSERT [dbo].[Peliserie] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (2, N'uwiehf', N'COCO', CAST(N'2020-11-03' AS Date), 2)
SET IDENTITY_INSERT [dbo].[Peliserie] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (1, N'efwe', N'Sol', 14, 40, N're')
INSERT [dbo].[Personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (2, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (3, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (4, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Personaje] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (5, N'euohweif', N'Facundo', 16, 30, N'jbwigbwrihwih')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje_X_Peliserie] ON 

INSERT [dbo].[Personaje_X_Peliserie] ([id], [fk_idPelicula], [fk_idPersonaje]) VALUES (1, 1, 1)
INSERT [dbo].[Personaje_X_Peliserie] ([id], [fk_idPelicula], [fk_idPersonaje]) VALUES (2, 1, 5)
INSERT [dbo].[Personaje_X_Peliserie] ([id], [fk_idPelicula], [fk_idPersonaje]) VALUES (3, 2, 1)
SET IDENTITY_INSERT [dbo].[Personaje_X_Peliserie] OFF
GO
USE [master]
GO
ALTER DATABASE [tp4-AvNoSma] SET  READ_WRITE 
GO
